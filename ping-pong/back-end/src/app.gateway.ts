import { Logger } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface Payload {
	name: string;
	text: string;
}

@WebSocketGateway(
  {cors: {
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true
  }}
)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: Payload): void {
    this.server.emit('msgToClient', payload, client.id);
  }

  afterInit(server: Server) {
    this.logger.log('🎉 Init Gateway ...');
  }

  handleConnection(client: Socket) {
    this.logger.log(`[connected] ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`[disconnected] ${client.id}`);
  }
}
