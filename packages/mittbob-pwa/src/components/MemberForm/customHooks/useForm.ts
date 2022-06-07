import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MemberData, Errors } from '../types';

export const bringBaseUrl = 'https://api.bring.com/shippingguide/api/postalCode.json?clientUrl=';
export const clientUrl = 'https://mitt.bob.no';

const useForm = (callback: () => void, validate: any) => {
  const { t } = useTranslation();
  const [member, setMember] = useState<MemberData>({
    email: '',
    mobile: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    address: '',
    postCode: '',
    postalAddress: '',
  });
  const [errors, setErrors] = useState({} as Errors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    // Formatting value for the birthDate input
    if (name === 'birthDate') value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3');

    setMember({
      ...member,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    const err = validate(member, t) || {};
    event.preventDefault();
    setErrors(err);
    setIsSubmitting(true);
  };

  function getPostalAddress(postCode: string) {
    return fetch(`${bringBaseUrl}${clientUrl}/hjem&country=NO&pnr=${postCode}`, {
      method: 'GET',
    }).then(function(res) {
      return res.json();
    });
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const postalAddress = await getPostalAddress(member.postCode);
      setMember({ ...member, postalAddress: postalAddress.result });
    }

    member.postCode?.length === 4 && fetchMyAPI();
  }, [member.postCode]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    member,
    errors,
  };
};

export default useForm;
