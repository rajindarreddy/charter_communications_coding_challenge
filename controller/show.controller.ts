import { APILogger } from '../logger/api.logger';
import { PackageService } from '../service/package.service';
import { ShowService } from '../service/show.service';

export class ShowController {

    private showService: ShowService;
    private packageService: PackageService;
    private logger: APILogger;

    constructor() {
        this.showService = new ShowService();
        this.packageService = new PackageService();
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

    async getShowsByNetworkId(networkId) {
        this.logger.info('Controller: getShowsByNetworkId', networkId);
        return await this.showService.getShowsByNetworkId(networkId);
    }

    async getShowsByPackageId(packageId) {
        this.logger.info('Controller: getShowsByPackageId', packageId);

        const _package = await this.packageService.getPackageById(packageId);

        return await this.showService.getShowsByNetworkIds(_package?.networks);
    }

    async deleteShow(showId) {
        this.logger.info('Controller: deleteShow', showId);
        return await this.showService.deleteShow(showId);
    }
}