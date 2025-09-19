import amqp from 'amqplib';
import { RABBITMQ_URL, AUTH_QUEUE, USER_QUEUE } from './constants.js';
import { registerUser, loginUser } from '../../controllers/userController.js';

// Lưu trữ kênh kết nối
let channel: amqp.Channel;

// Khởi tạo kết nối
export const initializeRabbitMQ = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        channel = await connection.createChannel();

        // Đảm bảo các queue tồn tại
        await channel.assertQueue(AUTH_QUEUE, { durable: false });
        await channel.assertQueue(USER_QUEUE, { durable: false });

        console.log('✅ Connected to RabbitMQ');

        // Thiết lập consumers
        await setupAuthQueueConsumer();
        await setupUserQueueConsumer();

        return channel;
    } catch (error) {
        console.error('❌ Error connecting to RabbitMQ:', error);
        throw error;
    }
};

// Xử lý các message liên quan đến authentication
const setupAuthQueueConsumer = async () => {
    channel.consume(AUTH_QUEUE, async (msg) => {
        if (!msg) return;

        try {
            const content = JSON.parse(msg.content.toString());
            const { action, data } = content;
            let response;

            // Xử lý các action khác nhau
            switch (action) {
                case 'register':
                    response = await registerUser(data);
                    break;
                case 'login':
                    response = await loginUser(data);
                    break;
                default:
                    response = { error: 'Unknown action' };
            }

            // Gửi phản hồi đến replyTo queue
            if (msg.properties.replyTo) {
                channel.sendToQueue(
                    msg.properties.replyTo,
                    Buffer.from(JSON.stringify(response)),
                    { correlationId: msg.properties.correlationId }
                );
            }

            // Xác nhận đã xử lý message
            channel.ack(msg);
        } catch (error) {
            console.error('Error processing auth message:', error);
            // Từ chối xử lý message và đưa về queue
            channel.nack(msg, false, false);
        }
    });
};

// Xử lý các message liên quan đến user management
const setupUserQueueConsumer = async () => {
    channel.consume(USER_QUEUE, async (msg) => {
        if (!msg) return;

        try {
            const content = JSON.parse(msg.content.toString());
            const { action, data } = content;
            let response;

            // Xử lý các action khác nhau - mở rộng sau

            // Gửi phản hồi đến replyTo queue
            if (msg.properties.replyTo) {
                channel.sendToQueue(
                    msg.properties.replyTo,
                    Buffer.from(JSON.stringify(response || { success: true })),
                    { correlationId: msg.properties.correlationId }
                );
            }

            // Xác nhận đã xử lý message
            channel.ack(msg);
        } catch (error) {
            console.error('Error processing user message:', error);
            // Từ chối xử lý message và đưa về queue
            channel.nack(msg, false, false);
        }
    });
}; 