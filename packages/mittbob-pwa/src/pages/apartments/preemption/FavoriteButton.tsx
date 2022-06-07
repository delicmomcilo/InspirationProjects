import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@bob/core-components';
import actions from 'src/redux/actions';
import selectors from 'src/redux/selectors';
import { IProps } from './favoriteButton/favoriteButton.types';

const FavoriteButton: React.FC<IProps> = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectors.person.favorite(id));

  const handleAddFavorite = () =>
    dispatch(actions.person.addFavoritePreemption({ id }));
  const handleRemoveFavorite = () =>
    dispatch(actions.person.removeFavoritePreemption({ id }));

  return isFavorite ? (
    <Button
      onClick={handleRemoveFavorite}
      size="medium"
      aria-label={t('Fjern favoritt')}
      variant="icon"
      iconName="Heart"
    />
  ) : (
    <Button
      onClick={handleAddFavorite}
      size="medium"
      aria-label={t('Legg til favoritt')}
      variant="icon"
      iconName="HeartOutlined"
    />
  );
};

export default React.memo(FavoriteButton);
