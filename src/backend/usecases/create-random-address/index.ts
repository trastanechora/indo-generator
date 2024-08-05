import type {
  Person,
  PersonGenderInput,
} from "@/backend/entities/person/types";

import getStreetAddress from "@/backend/repositories/generator/get-street-address";
import provinces from "@/backend/repositories/static/get-province";
import regencies from "@/backend/repositories/static/get-regency";
import districts from "@/backend/repositories/static/get-district";
import villages from "@/backend/repositories/static/get-village";

interface Props {
  provinceId?: number;
  regencyId?: number;
  districtId?: number;
  vilageId?: number;
}

const createFullAddress = (
  village?: string,
  district?: string,
  regency?: string,
  province?: string,
  postalCode?: string | number
) => {
  let address = getStreetAddress();

  if (village) address = address + ", " + village;
  if (district) address = address + ", " + district;
  if (regency) address = address + ", " + regency;
  if (province) address = address + ", " + province;
  if (postalCode) address = address + ", " + postalCode + ".";

  return address;
};

const getRandomAddress = (props: Props) => {
  const { provinceId, regencyId, districtId, vilageId } = props;

  if (provinceId) {
    const province = provinces.getById(provinceId);

    if (regencyId) {
      const regency = regencies.getById(regencyId);

      if (districtId) {
        const district = districts.getById(districtId);

        if (vilageId) {
          const village = villages.getById(vilageId);

          return createFullAddress(
            village?.name,
            district?.name,
            regency?.name,
            province?.name,
            village?.pos_code
          );
        }

        const village = villages.getRandomByDistrictId(districtId);
        return createFullAddress(
          village?.name,
          district?.name,
          regency?.name,
          province?.name,
          village?.pos_code
        );
      }

      const district = districts.getRandomByRegencyId(regencyId);
      const village = villages.getRandomByDistrictId(district.id);

      return createFullAddress(
        village?.name,
        district?.name,
        regency?.name,
        province?.name,
        village?.pos_code
      );
    }

    const regency = regencies.getRandomByProvinceId(provinceId);
    const district = districts.getRandomByRegencyId(regency.id);
    const village = villages.getRandomByDistrictId(district.id);

    return createFullAddress(
      village?.name,
      district?.name,
      regency?.name,
      province?.name,
      village?.pos_code
    );
  }

  const province = provinces.getRandom();
  const regency = regencies.getRandomByProvinceId(province.id);
  const district = districts.getRandomByRegencyId(regency.id);
  const village = villages.getRandomByDistrictId(district.id);

  return createFullAddress(
    village?.name,
    district?.name,
    regency?.name,
    province?.name,
    village?.pos_code
  );
};

export default getRandomAddress;
