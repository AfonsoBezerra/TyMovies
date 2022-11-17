import { BigHead } from '@bigheads/core';
import { CloseIcon } from '@stylesComponents/icons';
import { Modal } from '@stylesComponents/modal';
import { Bighead } from 'mock/Bighead';
import React, { useEffect, useState } from 'react';

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  props: any;
}

const NewModal = ({ setModal, props }: ModalProps) => {
  const [valuesSelects, setValuesSelects] = useState<any>([]);
  const [indexArr, setIndexArray] = useState<number | undefined>(-1);
  const [, setArrayFinal] = useState([]);
  useEffect(() => {
    if (indexArr === -1) {
      ///
    } else {
      setValuesSelects(
        valuesSelects.filter((x: any, i: any) => i !== indexArr),
      );
      setArrayFinal(valuesSelects.filter((x: any, i: any) => i !== indexArr));
      setIndexArray(-1);
    }
  }, [indexArr]);

  return (
    <Modal>
      <div className="content">
        <div className="modalHeader">
          <button type="button" onClick={() => setModal(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="modalBody">
          <div className="svg">
            <BigHead {...props} />
          </div>
          <form>
            {Bighead.map((types: any) => (
              <label key={types.id}>
                <span>{types.text}</span>
                <select
                  name={types.optionName}
                  id={types.id}
                  onChange={(e) => {
                    const indexArray = valuesSelects.findIndex(
                      (val: any) => val.id === types.id,
                    );

                    setValuesSelects([
                      ...valuesSelects,
                      {
                        id: types.id,
                        name: types.optionName,
                        value: e.target.value,
                      },
                    ]);
                    if (indexArray === -1) {
                      setIndexArray(undefined);
                    } else {
                      setIndexArray(indexArray);
                    }
                  }}
                >
                  <option value="default">default</option>
                  {types.options.map((value: any, index: number) => (
                    <option
                      key={index}
                      className={types.optionName}
                      value={value}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            ))}
            <button type="button">Gerar Imagem</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default NewModal;
