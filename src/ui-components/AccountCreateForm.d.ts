/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountCreateFormInputValues = {
    owner?: string;
    type?: string;
    provider?: string;
    providerAccountId?: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: string;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
};
export declare type AccountCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    provider?: ValidationFunction<string>;
    providerAccountId?: ValidationFunction<string>;
    refresh_token?: ValidationFunction<string>;
    access_token?: ValidationFunction<string>;
    expires_at?: ValidationFunction<string>;
    token_type?: ValidationFunction<string>;
    scope?: ValidationFunction<string>;
    id_token?: ValidationFunction<string>;
    session_state?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCreateFormOverridesProps = {
    AccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    provider?: PrimitiveOverrideProps<TextFieldProps>;
    providerAccountId?: PrimitiveOverrideProps<TextFieldProps>;
    refresh_token?: PrimitiveOverrideProps<TextFieldProps>;
    access_token?: PrimitiveOverrideProps<TextFieldProps>;
    expires_at?: PrimitiveOverrideProps<TextFieldProps>;
    token_type?: PrimitiveOverrideProps<TextFieldProps>;
    scope?: PrimitiveOverrideProps<TextFieldProps>;
    id_token?: PrimitiveOverrideProps<TextFieldProps>;
    session_state?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onSuccess?: (fields: AccountCreateFormInputValues) => void;
    onError?: (fields: AccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onValidate?: AccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountCreateForm(props: AccountCreateFormProps): React.ReactElement;
