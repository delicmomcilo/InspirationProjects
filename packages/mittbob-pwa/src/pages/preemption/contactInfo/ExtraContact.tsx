import React from 'react';
import { Button, Icon, Typography } from '@bob/core-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { InlineFlexDiv, Info } from './contactInfo.styles';
import { Buttons, Container, Input } from './extraContact/extraContact.styles';
import { IProps } from './extraContact/extraContact.types';
import { RootState } from '../../../redux/rootState';
import { setErrors, setMobile, setName, toggleForm } from '../../../redux/modules/ui/preemption/contactInfo/actions';
import validate from './extraContact/validation'

const ExtraContact = ({onSave }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const {name, mobile, showExtraContactForm, errors} = useSelector((state: RootState) => state.ui.preemption.contactInfo);
  const { t } = useTranslation();
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setName(e.currentTarget.value));
  };
  const handleMobileChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setMobile(e.currentTarget.value));
  };
  const handleSave = () => {
    const e = validate({name, mobile}, t);
    if (e) {
      dispatch(setErrors(e))
    } else {
      if (errors) dispatch(setErrors({}))
      // onSave(name, mobile);
      dispatch(toggleForm())
    }
  };

  const handleEdit = () => {
    dispatch(toggleForm())
  };
  const handleCancel = () => {
    dispatch(toggleForm())
  }

  return (
    <Container>
      {(showExtraContactForm || name || mobile) && (
        <InlineFlexDiv>
          <Icon name="Profile" />
          <Info>
            <Typography color="violet" gutterBottom>
              {(name || mobile) ? t('Kontaktperson') : t('Ny kontaktperson')}
            </Typography>
            {showExtraContactForm ? (
              <>
                <Input value={name} label={t('Name')} onChange={handleNameChange} error={errors.name?.message} />
                <Input value={mobile} label={t('Mobilnummer')} onChange={handleMobileChange} error={errors.mobile?.message} />
              </>
            ) : (
              <>
                <Typography>{name}</Typography>
                <Typography gutterBottom>
                  {t('MOBILE_PERSON_DETAILS', { mobile })}
                </Typography>
              </>
            )}
          </Info>
        </InlineFlexDiv>
      )}
      <Buttons edit={showExtraContactForm}>
        {showExtraContactForm ? (
          <>
            <Button
              arrowPosition="left"
              fitContent
              variant="tertiary"
              onClick={handleCancel}
            >
              {t('Ikke legg til kontakt')}
            </Button>
          </>
        ) : (
          <Button variant="tertiary" onClick={handleEdit}>
            {`${t('Endre kontaktperson')}?`}
          </Button>
        )}
        <Button onClick={handleSave}>{t('Lagre')}</Button>
      </Buttons>
    </Container>
  );
};

export default ExtraContact;
