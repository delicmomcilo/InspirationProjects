import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalDialog from '../components/ModalDialog';
import { changeFeatureFlags, toggleFeatureFlagsModal } from '../redux/modules/ui/app/actions';
import { Button } from '../components/atomic';

const FeatureFlagPreview = () => {
  const open = useSelector(({ ui: { app } }) => app?.featureFlagsModalOpen);
  const flags = useSelector(({ ui: { app } }) => app?.featureFlags);
  const dispatch = useDispatch();
  const handleFindHome = () => {
    dispatch(changeFeatureFlags({ findHome: !flags.findHome }));
  };

  return (
    <ModalDialog
      title="Set preview feature flags"
      open={open}
      onClose={n => dispatch(toggleFeatureFlagsModal())}
    >
      <pre>{JSON.stringify(flags, 2)}</pre>
      <Button onClick={handleFindHome}>Find Home</Button>
    </ModalDialog>
  );
};

export default FeatureFlagPreview;
