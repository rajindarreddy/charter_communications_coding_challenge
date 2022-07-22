import { PackageController} from './package.controller';
import {PackageService} from '../service/package.service';

jest.mock('../service/package.service'); 
const mockPackageService = jest.mocked(PackageService, true);

beforeEach(() => {
    mockPackageService.mockClear();
});

it('We can check if the test called the class constructor', () => {
    const networkController = new PackageController();
    expect(PackageService).toHaveBeenCalledTimes(1);
});

