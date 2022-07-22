import { ShowRepository} from '../repository/show.repository';
import { ShowService } from './show.service';

jest.mock('../repository/show.repository'); 
const mockNetworkRepository = jest.mocked(ShowRepository, true);

beforeEach(() => {
    mockNetworkRepository.mockClear();
});

it('We can check if the test called the class constructor', () => {
    const showService = new ShowService();
    expect(ShowRepository).toHaveBeenCalledTimes(1);
});

