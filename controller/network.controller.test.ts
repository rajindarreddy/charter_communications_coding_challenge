import { NetworkController} from './network.controller';
import {NetworkService} from '../service/network.service';

jest.mock('../service/network.service'); 
const mockNetworkService = jest.mocked(NetworkService, true);

beforeEach(() => {
    mockNetworkService.mockClear();
});

it('We can check if the test called the class constructor', () => {
    const networkController = new NetworkController();
    expect(NetworkService).toHaveBeenCalledTimes(1);
});

