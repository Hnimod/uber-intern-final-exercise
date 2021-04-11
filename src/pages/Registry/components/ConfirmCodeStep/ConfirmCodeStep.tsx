import { useRef, useEffect } from 'react';

import CodeInput from './CodeInput';
import { FormModel } from '../../models/registryFormModel';
import { FormButton } from '../../../../shared/Buttons';
import { useAppSelector } from '../../../../app/hooks';
import { selectRegistry } from '../../../../features/registry/registrySlice';

import styles from './ConfirmCodeStep.module.scss';

type Props = {
  formModel: FormModel;
};

const ConfirmCodeStep = ({ formModel }: Props) => {
  const registry = useAppSelector(selectRegistry);
  const { code1, code2, code3, code4 } = formModel;
  const code1Ref = useRef<HTMLInputElement>(null);
  const code2Ref = useRef<HTMLInputElement>(null);
  const code3Ref = useRef<HTMLInputElement>(null);
  const code4Ref = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = [code1Ref, code2Ref, code3Ref, code4Ref, buttonRef];

  useEffect(() => {
    code1Ref.current?.focus();
  }, []);

  const nextInput = (index: number) => {
    // inputRef[index].current!.blur();
    inputRef[index + 1].current!.focus();
  };

  return (
    <>
      <p className={styles.description}>
        Enter the 4-digits code sent to you at the {registry.phoneNumber}.{' '}
        <a href="/#" target="_blank">
          Did you enter the correct number?
        </a>
      </p>

      <div className={styles.confirmCode}>
        <CodeInput
          name={code1.name}
          refInput={code1Ref}
          onInputChange={() => nextInput(0)}
        />
        <CodeInput
          name={code2.name}
          refInput={code2Ref}
          onInputChange={() => nextInput(1)}
        />
        <CodeInput
          name={code3.name}
          refInput={code3Ref}
          onInputChange={() => nextInput(2)}
        />
        <CodeInput
          name={code4.name}
          refInput={code4Ref}
          onInputChange={() => nextInput(3)}
        />
      </div>

      <div className={styles.button}>
        <a href="/#" target="_blank">
          I didn't receive code?
        </a>
        <FormButton buttonRef={buttonRef} />
      </div>
    </>
  );
};

export default ConfirmCodeStep;
