import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field, FieldProps } from "formik";
import { object as YupObject, number as YupNumber } from "yup";
import { Input, Icon, TextLink, DetailsTooltip } from "@stellar/design-system";
import { useTranslation } from "react-i18next";

import { Button } from "popup/basics/buttons/Button";
import { navigateTo } from "popup/helpers/navigate";
import { useNetworkFees } from "popup/helpers/useNetworkFees";
import { ROUTES } from "popup/constants/routes";
import { PopupWrapper } from "popup/basics/PopupWrapper";
import { FormRows } from "popup/basics/Forms";
import { SubviewHeader } from "popup/components/SubviewHeader";
import {
  saveTransactionFee,
  transactionDataSelector,
} from "popup/ducks/transactionSubmission";

import "./styles.scss";

export const SendSettingsFee = ({ previous }: { previous: ROUTES }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { transactionFee } = useSelector(transactionDataSelector);
  const { networkCongestion, recommendedFee } = useNetworkFees();

  return (
    <PopupWrapper>
      <SubviewHeader
        title="Transaction Fee"
        customBackAction={() => navigateTo(previous)}
        customBackIcon={<Icon.X />}
        rightButton={
          <DetailsTooltip
            tooltipPosition={DetailsTooltip.tooltipPosition.BOTTOM}
            details={
              <span>
                {t("Maximum network transaction fee to be paid")}{" "}
                <TextLink
                  variant={TextLink.variant.secondary}
                  href="https://developers.stellar.org/docs/glossary/fees/#base-fee"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("Learn more")}
                </TextLink>
              </span>
            }
          >
            <span></span>
          </DetailsTooltip>
        }
      />
      <div className="TransactionFee">
        <Formik
          initialValues={{ transactionFee }}
          onSubmit={(values) => {
            dispatch(saveTransactionFee(String(values.transactionFee)));
            navigateTo(previous);
          }}
          validationSchema={YupObject().shape({
            transactionFee: YupNumber().min(
              0.00001,
              `${t("must be greater than")} 0.00001`,
            ),
          })}
        >
          {({ setFieldValue, values, isValid, errors }) => (
            <Form>
              <FormRows>
                <Field name="transactionFee">
                  {({ field }: FieldProps) => (
                    <>
                      <Input
                        id="transaction-fee-input"
                        className="SendTo__input"
                        type="number"
                        {...field}
                        error={errors.transactionFee}
                      />
                      <div className="TransactionFee__row">
                        <TextLink
                          underline
                          disabled={field.value === recommendedFee}
                          variant={TextLink.variant.secondary}
                          onClick={() =>
                            setFieldValue("transactionFee", recommendedFee)
                          }
                        >
                          {t("Set recommended")}
                        </TextLink>
                        <span>
                          {networkCongestion} {t("congestion")}
                        </span>
                      </div>
                    </>
                  )}
                </Field>
              </FormRows>
              <div className="SendPayment__btn-continue">
                <Button
                  fullWidth
                  variant={Button.variant.tertiary}
                  disabled={!values.transactionFee || !isValid}
                  type="submit"
                >
                  {t("Done")}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </PopupWrapper>
  );
};
