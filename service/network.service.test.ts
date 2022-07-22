import { NetworkRepository} from '../repository/network.repository';
import {NetworkService} from './network.service';

jest.mock('../repository/network.repository'); 
const mockNetworkRepository = jest.mocked(NetworkRepository, true);

beforeEach(() => {
    mockNetworkRepository.mockClear();
});

it('We can check if the test called the class constructor', () => {
    const networkService = new NetworkService();
    expect(NetworkRepository).toHaveBeenCalledTimes(1);
});

