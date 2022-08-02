import { Op } from "sequelize";
import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Shows } from "../model/show.model";

export class ShowRepository {

    private logger: APILogger;
    private db: any = {};
    private showRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
          });
        this.showRespository = this.db.sequelize.getRepository(Shows);
    }

    async getShows() {
        
        try {
            const shows = await this.showRespository.findAll();
            console.log('shows:::', shows);
            return shows;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getShowsByNetworkId(networkId) {
        
        try {
            const shows = await this.showRespository.findAll({
                where: {
                    network: networkId
                }
            });
            console.log('shows:::', shows);
            return shows;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getShowsByNetworkIds(networkIds) {
    
        try {
            const shows = await this.showRespository.findAll({
                where: {
                    network: {
                       [Op.in] : networkIds
                    }
                }
            });
            console.log('shows:::', shows);
            return shows;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createShow(show) {
        let data = {};
        try {
            show.createdate = new Date().toISOString();
            data = await this.showRespository.create(show);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateShow(show) {
        let data = {};
        try {
            show.updateddate = new Date().toISOString();
            data = await this.showRespository.update({...show}, {
                where: {
                    id: show.id
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteShow(showId) {
        let data = {};
        try {
            data = await this.showRespository.destroy({
                where: {
                    id: showId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}