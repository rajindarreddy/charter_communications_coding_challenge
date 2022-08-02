import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Packages } from "../model/package.model";

export class PackageRepository {

    private logger: APILogger;
    private db: any = {};
    private packageRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
          });
        this.packageRespository = this.db.sequelize.getRepository(Packages);
    }

    async getPackages() {
        
        try {
            const packages = await this.packageRespository.findAll();
            console.log('packages:::', packages);
            return packages;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getPackageById(packageId) {
        
        try {
            const packages = await this.packageRespository.findByPk(packageId);
            console.log('packages:::', packages);
            return packages;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createPackage(_package) {
        let data = {};
        try {
            _package.createdate = new Date().toISOString();
            data = await this.packageRespository.create(_package);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updatePackage(_package) {
        let data = {};
        try {
            _package.updateddate = new Date().toISOString();
            data = await this.packageRespository.update({..._package}, {
                where: {
                    id: _package.id
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deletePackage(packageId) {
        let data = {};
        try {
            data = await this.packageRespository.destroy({
                where: {
                    id: packageId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}