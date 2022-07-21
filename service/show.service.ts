import { ShowRepository } from '../repository/show.repository';

export class ShowService {

    private showRepository: ShowRepository;

    constructor() {
        this.showRepository = new ShowRepository();
    }

    async getShows() {
        return await this.showRepository.getShows();
    }

    async createShow(show) {
        return await this.showRepository.createShow(show);
    }

    async updateShow(show) {
        return await this.showRepository.updateShow(show);
    }

    async deleteShow(showId) {
        return await this.showRepository.deleteShow(showId);
    }

}