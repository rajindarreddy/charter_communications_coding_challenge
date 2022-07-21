import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Networks } from "../model/network.model";

export class NetworkRepository {

    private logger: APILogger;
    private db: any = {};
    private networkRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.networkRespository = this.db.sequelize.getRepository(Networks);
    }

    async getNetworks() {
        
        try {
            const networks = await this.networkRespository.findAll();
            console.log('networks:::', networks);
            return networks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createNetwork(network) {
        let data = {};
        try {
            network.createdate = new Date().toISOString();
            data = await this.networkRespository.create(network);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateNetwork(network) {
        let data = {};
        try {
            network.updateddate = new Date().toISOString();
            data = await this.networkRespository.update({...network}, {
                where: {
                    id: network.id
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteNetwork(networkId) {
        let data = {};
        try {
            data = await this.networkRespository.destroy({
                where: {
                    id: networkId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}