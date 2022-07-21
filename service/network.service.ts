import { NetworkRepository } from '../repository/network.repository';

export class NetworkService {

    private networkRepository: NetworkRepository;

    constructor() {
        this.networkRepository = new NetworkRepository();
    }

    async getNetworks() {
        return await this.networkRepository.getNetworks();
    }

    async createNetwork(network) {
        return await this.networkRepository.createNetwork(network);
    }

    async updateNetwork(network) {
        return await this.networkRepository.updateNetwork(network);
    }

    async deleteNetwork(networkId) {
        return await this.networkRepository.deleteNetwork(networkId);
    }

}