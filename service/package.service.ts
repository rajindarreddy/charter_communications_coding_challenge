import { PackageRepository } from '../repository/package.repository';

export class PackageService {

    private packageRepository: PackageRepository;

    constructor() {
        this.packageRepository = new PackageRepository();
    }

    async getPackages() {
        return await this.packageRepository.getPackages();
    }

    async getPackageId() {
        return await this.packageRepository.getPackages();
    }
    
    async getPackageById(packageID) {
        return await this.packageRepository.getPackageById(packageID);
    }

    async createPackage(_package) {
        return await this.packageRepository.createPackage(_package);
    }

    async updatePackage(_package) {
        return await this.packageRepository.updatePackage(_package);
    }

    async deletePackage(packageId) {
        return await this.packageRepository.deletePackage(packageId);
    }

}