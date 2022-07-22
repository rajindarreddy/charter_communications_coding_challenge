import { ShowController} from './show.controller';
import { ShowService} from '../service/show.service';
import {PackageService} from '../service/package.service';

jest.mock('../service/show.service'); 
const mockShowService = jest.mocked(ShowService, true);

jest.mock('../service/package.service'); 
const mockPackageService = jest.mocked(PackageService, true);

beforeEach(() => {
    mockShowService.mockClear();
});

it('We can check if the test called the class constructor', () => {
    const showController = new ShowController();
    expect(ShowService).toHaveBeenCalledTimes(1);
});

