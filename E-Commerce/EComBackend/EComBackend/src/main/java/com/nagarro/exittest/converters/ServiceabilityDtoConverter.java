package com.nagarro.exittest.converters;

import com.nagarro.exittest.dto.ServiceabilityDto;
import com.nagarro.exittest.models.Serviceability;
//Author Saim Hur Hasan //

public class ServiceabilityDtoConverter {
	public ServiceabilityDto convertEntityToDto(Serviceability serviceability) {

		ServiceabilityDto serviceabilityDto = new ServiceabilityDto();

		serviceabilityDto.setPincode(serviceability.getPincode());

		serviceabilityDto.setExpectedDelivery(DateConverter.covertDaysIntoDate(serviceability.getExpectedDelivery()));

		return serviceabilityDto;
	}

	public Serviceability convertDtoToEntity(ServiceabilityDto serviceabilityDto) {
		Serviceability serviceability = new Serviceability();

		serviceability.setPincode(serviceabilityDto.getPincode());
		serviceability.setExpectedDelivery(Integer.parseInt(serviceabilityDto.getExpectedDelivery()));

		return serviceability;
	}
}
