import { APILogger } from '../logger/api.logger';
import { NetworkService } from '../service/network.service';
import { ShowService } from '../service/show.service';

export class NetworkController {

    private networkService: NetworkService;
    private logger: APILogger;

    constructor() {
        this.networkService = new NetworkService();
        this.logger = new APILogger()
    }

    async getNetworks() {
        this.logger.info('Controller: getNetworks', null)
        return await this.networkService.getNetworks();
    }

    async createNetwork(network) {
        this.logger.info('Controller: createNetwork', network);
        return await this.networkService.createNetwork(network);
    }

    async updateNetwork(network) {
        this.logger.info('Controller: updateNetwork', network);
        return await this.networkService.updateNetwork(network);
    }

    async deleteNetwork(networkId) {
        this.logger.info('Controller: deleteNetwork', networkId);
        return await this.networkService.deleteNetwork(networkId);
    }
}