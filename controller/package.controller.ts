import { APILogger } from '../logger/api.logger';
import { PackageService } from '../service/package.service';

export class PackageController {

    private packageService: PackageService;
    private logger: APILogger;

    constructor() {
        this.packageService = new PackageService();
        this.logger = new APILogger()
    }

    async getPackages() {
        this.logger.info('Controller: getPackages', null)
        return await this.packageService.getPackages();
    }

    async getPackageById(packageId) {
        this.logger.info('Controller: getPackageById', null)
        return await this.packageService.getPackageById(packageId);
    }

    async createPackage(_package) {
        this.logger.info('Controller: createPackage', _package);
        return await this.packageService.createPackage(_package);
    }

    async updatePackage(_package) {
        this.logger.info('Controller: updatePackage', _package);
        return await this.packageService.updatePackage(_package);
    }

    async deletePackage(packageId) {
        this.logger.info('Controller: deletePackage', packageId);
        return await this.packageService.deletePackage(packageId);
    }
}