import { PackageRepository} from '../repository/package.repository';
import { PackageService } from './package.service';

jest.mock('../repository/package.repository'); 
const mockNetworkRepository = jest.mocked(PackageRepository, true);

beforeEach(() => {
    mockNetworkRepository.mockClear();
});

it('We can check if the test called the class constructor', () => {
    const packageService = new PackageService();
    expect(PackageRepository).toHaveBeenCalledTimes(1);
});

