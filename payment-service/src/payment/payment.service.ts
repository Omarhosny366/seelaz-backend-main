import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { PaymentRequestDTO } from './dto/payment-request.dto';
import { authenticate } from './utils/authenticate';
import { OrderResponseDTO } from './dto/order-response.dto';
import { PaymentKeyResponseDTO } from './dto/payment-key-response.dto';

const PAYMOB_URL = "https://accept.paymob.com/api";

@Injectable()
export class PaymentService {
  async pay(paymentRequestDTO: PaymentRequestDTO): Promise<string | undefined> {
    try {
      const { order_cart, billing_data, amount_cents, delivery_needed, customer } = paymentRequestDTO;

      // Authentication Request -- step 1 in the docs
      const accessToken = await authenticate();

      if (!accessToken) {
        throw new Error("Authentication failed. No access token obtained.");
      }

      // Order Registration API -- step 2 in the docs
      const orderUrl = `${PAYMOB_URL}/ecommerce/orders`;
      const headers = {
        "Content-Type": "application/json",
      };
      const orderData = {
        auth_token: accessToken,
        delivery_needed,
        amount_cents,
        currency: "EGP",
        items: order_cart,
      };
      const orderResponse: AxiosResponse<OrderResponseDTO> = await axios.post(orderUrl, orderData, { headers });
      const orderId = orderResponse.data.id;

      // Payment Key Request  -- step 3 in the docs
      const paymentKeyUrl = `${PAYMOB_URL}/acceptance/payment_keys`;
      const paymentKeyData = {
        auth_token: accessToken,
        amount_cents,
        delivery_needed,
        expiration: 3600,
        order_id: orderId,
        billing_data,
        customer,
        currency: "EGP",
        
        integration_id: 4580362, // Replace with your integration id
      };
      const paymentKeyResponse: AxiosResponse<PaymentKeyResponseDTO> = await axios.post(paymentKeyUrl, paymentKeyData, { headers });
      const paymentToken = paymentKeyResponse.data.token;

      // Construct the iframe URL
      const iframeUrl = `https://accept.paymob.com/api/acceptance/iframes/847842?payment_token=${paymentToken}`;
      
      // Add the billing data
      console.log("Payment URL:", iframeUrl);
      console.log("Billing data:", billing_data);
      return iframeUrl;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error in pay function:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
      return undefined;
    }
  }

  async getTransactionById(transactionId: string): Promise<PaymentKeyResponseDTO | undefined> {
    try {
        // Authenticate -- Step 1
        const accessToken = await authenticate();
        const url = `${PAYMOB_URL}/acceptance/transactions/${transactionId}`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        };
        const response: AxiosResponse<PaymentKeyResponseDTO> = await axios.get(url, { headers });
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error in getTransactionById function:", error.response?.data);
        } else {
            console.error("Unexpected error:", error);
        }

        // Rethrow the error for the caller to handle
        throw error;
    }
  }
}
