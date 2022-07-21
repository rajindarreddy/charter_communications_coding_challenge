import { APILogger } from '../logger/api.logger';
import { ShowService } from '../service/show.service';

export class ShowController {

    private showService: ShowService;
    private logger: APILogger;

    constructor() {
        this.showService = new ShowService();
        this.logger = new APILogger()
    }

    async getShows() {
        this.logger.info('Controller: getShows', null)
        return await this.showService.getShows();
    }

    async createShow(show) {
        this.logger.info('Controller: createShow', show);
        return await this.showService.createShow(show);
    }

    async updateShow(show) {
        this.logger.info('Controller: updateShow', show);
        return await this.showService.updateShow(show);
    }

    async deleteShow(showId) {
        this.logger.info('Controller: deleteShow', showId);
        return await this.showService.deleteShow(showId);
    }
}