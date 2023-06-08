/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountUpdateFormInputValues = {
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
export declare type AccountUpdateFormValidationValues = {
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
export declare type AccountUpdateFormOverridesProps = {
    AccountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type AccountUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    account?: Account;
    onSubmit?: (fields: AccountUpdateFormInputValues) => AccountUpdateFormInputValues;
    onSuccess?: (fields: AccountUpdateFormInputValues) => void;
    onError?: (fields: AccountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountUpdateFormInputValues) => AccountUpdateFormInputValues;
    onValidate?: AccountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountUpdateForm(props: AccountUpdateFormProps): React.ReactElement;
