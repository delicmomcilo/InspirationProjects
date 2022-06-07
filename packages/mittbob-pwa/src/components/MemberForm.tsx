import React from 'react';
import useForm from './MemberForm/customHooks/useForm';
import validate from './MemberForm/validation/validateForm';
import { Grid, Typography, Button, Input } from '@bob/core-components';
import { Form } from '../../src/pages/me/profile/profile.styles';
import { useTranslation } from 'react-i18next';

const MemberForm = () => {
  const { t } = useTranslation();
  const { handleChange, handleSubmit, member, errors } = useForm(submitMemberForm, validate);

  function submitMemberForm() {
    console.log(member);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Form onSubmit={handleSubmit} noValidate>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between" spacing={2}>
                  <Grid xs={6} item>
                    <Typography>{t('Fornavn')}</Typography>
                    <Input
                      name="firstName"
                      type="text"
                      value={member.firstName}
                      onChange={handleChange}
                      error={errors?.firstName?.message}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <Typography>{t('Etternavn')}</Typography>
                    <Input
                      name="lastName"
                      type="text"
                      value={member.lastName}
                      onChange={handleChange}
                      error={errors?.lastName?.message}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography>{t('E-post')}</Typography>
                <Input
                  name="email"
                  type="email"
                  value={member.email}
                  onChange={handleChange}
                  error={errors?.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between" spacing={2}>
                  <Grid item xs={7}>
                    <Typography>{t('Mobil')}</Typography>
                    <Input
                      name="mobile"
                      type="text"
                      value={member.mobile}
                      onChange={handleChange}
                      error={errors?.mobile?.message}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography>{t('Fødselsdato')}</Typography>
                    <Input
                      name="birthDate"
                      type="text"
                      value={member.birthDate}
                      onChange={handleChange}
                      placeholder="dd.mm.åååå"
                      error={errors?.birthDate?.message}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography>{t('Adresse')}</Typography>
                <Input
                  name="address"
                  type="text"
                  value={member.address}
                  onChange={handleChange}
                  error={errors?.address?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={4}>
                    <Typography>{t('Postnummer')}</Typography>
                    <Input
                      name="postCode"
                      type="text"
                      value={member.postCode}
                      onChange={handleChange}
                      error={errors?.postCode?.message}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography>{t('Poststed')}</Typography>
                    <Input
                      disabled={true}
                      name="postalAddress"
                      type="text"
                      value={member.postalAddress}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems="flex-end" justifyContent="flex-end">
                  <Button type="submit">{t('Bli medlem')}</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};

export default MemberForm;
