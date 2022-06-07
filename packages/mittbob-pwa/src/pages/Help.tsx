import React, { useRef } from 'react';
import { Grid, Typography } from '@bob/core-components';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './help/help.styles';

const Help = (): JSX.Element => {
  const e000 = useRef<HTMLDivElement>(null!);
  const e100 = useRef<HTMLDivElement>(null!);
  const e101 = useRef<HTMLDivElement>(null!);
  const e102 = useRef<HTMLDivElement>(null!);
  const e103 = useRef<HTMLDivElement>(null!);
  const e104 = useRef<HTMLDivElement>(null!);
  const e105 = useRef<HTMLDivElement>(null!);
  const e106 = useRef<HTMLDivElement>(null!);
  const location = useLocation();
  const { t } = useTranslation();

  const isHighlighted = (id: string) => {
    const hash = location.hash.slice(1);
    return hash === id;
  };
  const shouldDisplay = (id: string) => {
    if (!location.hash) return true;
    return isHighlighted(id);
  };
  /*useEffect(() => {
    const hash = location.hash.slice(1);
    switch (hash) {
      case '100':
        e100.current.scrollIntoView();
        break;
      case '101':
        e101.current.scrollIntoView();
        break;
      case '102':
        e102.current.scrollIntoView();
        break;
      case '103':
        e103.current.scrollIntoView();
        break;
      case '104':
        e104.current.scrollIntoView();
        break;
      default:
        break;
    }
  }, [location.hash]);*/
  return (
    <Container container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography as="h1" size="xxx-large" color="violet">
              {t('help_header')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {t('Kontakt oss på')} <a href="mailto:kundesenter@bob.no">kundesenter@bob.no</a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {shouldDisplay('000') && (
        <Grid item xs={12} ref={e000}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e000_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e000_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('100') || shouldDisplay('200')) && (
        <Grid item xs={12} ref={e100}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e100_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e100_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('101') || shouldDisplay('201')) && (
        <Grid item xs={12} ref={e101}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e101_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e101_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('102') || shouldDisplay('202')) && (
        <Grid item xs={12} ref={e102}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e102_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e102_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('103') || shouldDisplay('203')) && (
        <Grid item xs={12} ref={e103}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e103_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e103_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('104') || shouldDisplay('204')) && (
        <Grid item xs={12} ref={e104}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e104_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e104_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('105') || shouldDisplay('205')) && (
        <Grid item xs={12} ref={e105}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e105_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e105_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {(shouldDisplay('106') || shouldDisplay('206')) && (
        <Grid item xs={12} ref={e106}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                size="x-large"
                color="rosso"
                fontWeight="600"
              >
                {t('e106_Header')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{t('e106_Info')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Help;
