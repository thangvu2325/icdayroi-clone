import classNames from 'classnames/bind';
import styles from './CheckBoxRadio.module.scss';
import { FunctionComponent, useState } from 'react';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);
interface Ipayment {
  id: string;
  left: string;
  right?: ReactNode | string;
  detail?: {
    id: string;
    important?: boolean;
    content?: string;
  }[];
}
interface CheckBoxRadioProps {
  data: Ipayment[];
  action?: Function;
}
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});
function BpRadio(props: RadioProps) {
  return <Radio disableRipple color="default" checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />;
}
function Label(label: Ipayment) {
  return (
    <div className={cx('container')}>
      <div className={cx('label')}>{label.left}</div>
      <div className={cx('radio-icon')}>{label.right}</div>
    </div>
  );
}
const CheckBoxRadio: FunctionComponent<CheckBoxRadioProps> = ({ data, action = null }) => {
  const [radioValue, setRadioValue] = useState<string>('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);

    const selectedDataItem = data.find((item) => item.left === e.target.value);
    if (selectedDataItem?.right?.replace('₫', '') === 'Miễn phí') {
      action && action(0);
    } else {
      const rightValue = selectedDataItem?.right;
      if (typeof rightValue === 'string') {
        const numericValue = parseFloat(rightValue.replace('₫', '').replace(/\./g, ''));
        action && action(numericValue);
      }
    }
  };

  return (
    <FormControl className={cx('wrap')}>
      <RadioGroup
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        value={radioValue}
        onChange={handleChangeValue}
      >
        {data?.map((item) => (
          <span key={item.id}>
            <FormControlLabel value={item.left} control={<BpRadio />} label={Label(item)} className={cx('radio')} />
            {item.detail && item.left === radioValue ? (
              <div className={cx('detail')}>
                {item.detail.map((detail, index) => {
                  return (
                    <div
                      className={cx('text', {
                        important: detail.important,
                      })}
                      key={detail.id}
                    >
                      {detail.content}
                    </div>
                  );
                })}
              </div>
            ) : (
              ''
            )}
          </span>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CheckBoxRadio;
