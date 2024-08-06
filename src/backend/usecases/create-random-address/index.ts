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

interface AddressItem {
  name: string;
  code?: string;
}

const createFullAddress = (
  village?: AddressItem,
  district?: AddressItem,
  regency?: AddressItem,
  province?: AddressItem,
  postalCode?: string | number
) => {
  let address = getStreetAddress();
  let addressCoding = "";

  if (village) address = address + ", " + village.name;

  if (district) {
    address = address + ", " + district.name;
    addressCoding = district.code + addressCoding;
  } else {
    addressCoding = "00" + addressCoding;
  }

  if (regency) {
    address = address + ", " + regency.name;
    addressCoding = regency.code + addressCoding;
  } else {
    addressCoding = "00" + addressCoding;
  }

  if (province) {
    address = address + ", " + province.name;
    addressCoding = province.code + addressCoding;
  } else {
    addressCoding = "00" + addressCoding;
  }

  if (postalCode) address = address + ", " + postalCode + ".";

  return { address, addressCoding };
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
            village,
            district,
            regency,
            province,
            village?.pos_code
          );
        }

        const village = villages.getRandomByDistrictId(districtId);
        return createFullAddress(
          village,
          district,
          regency,
          province,
          village?.pos_code
        );
      }

      const district = districts.getRandomByRegencyId(regencyId);
      const village = villages.getRandomByDistrictId(district.id);

      return createFullAddress(
        village,
        district,
        regency,
        province,
        village?.pos_code
      );
    }

    const regency = regencies.getRandomByProvinceId(provinceId);
    const district = districts.getRandomByRegencyId(regency.id);
    const village = villages.getRandomByDistrictId(district.id);

    return createFullAddress(
      village,
      district,
      regency,
      province,
      village?.pos_code
    );
  }

  const province = provinces.getRandom();
  const regency = regencies.getRandomByProvinceId(province.id);
  const district = districts.getRandomByRegencyId(regency.id);
  const village = villages.getRandomByDistrictId(district.id);

  return createFullAddress(
    village,
    district,
    regency,
    province,
    village?.pos_code
  );
};

export default getRandomAddress;
