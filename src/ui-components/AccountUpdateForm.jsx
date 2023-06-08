/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AccountUpdateForm(props) {
  const {
    id: idProp,
    account: accountModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    owner: "",
    type: "",
    provider: "",
    providerAccountId: "",
    refresh_token: "",
    access_token: "",
    expires_at: "",
    token_type: "",
    scope: "",
    id_token: "",
    session_state: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [type, setType] = React.useState(initialValues.type);
  const [provider, setProvider] = React.useState(initialValues.provider);
  const [providerAccountId, setProviderAccountId] = React.useState(
    initialValues.providerAccountId
  );
  const [refresh_token, setRefresh_token] = React.useState(
    initialValues.refresh_token
  );
  const [access_token, setAccess_token] = React.useState(
    initialValues.access_token
  );
  const [expires_at, setExpires_at] = React.useState(initialValues.expires_at);
  const [token_type, setToken_type] = React.useState(initialValues.token_type);
  const [scope, setScope] = React.useState(initialValues.scope);
  const [id_token, setId_token] = React.useState(initialValues.id_token);
  const [session_state, setSession_state] = React.useState(
    initialValues.session_state
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountRecord
      ? { ...initialValues, ...accountRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setType(cleanValues.type);
    setProvider(cleanValues.provider);
    setProviderAccountId(cleanValues.providerAccountId);
    setRefresh_token(cleanValues.refresh_token);
    setAccess_token(cleanValues.access_token);
    setExpires_at(cleanValues.expires_at);
    setToken_type(cleanValues.token_type);
    setScope(cleanValues.scope);
    setId_token(cleanValues.id_token);
    setSession_state(cleanValues.session_state);
    setErrors({});
  };
  const [accountRecord, setAccountRecord] = React.useState(accountModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Account, idProp)
        : accountModelProp;
      setAccountRecord(record);
    };
    queryData();
  }, [idProp, accountModelProp]);
  React.useEffect(resetStateValues, [accountRecord]);
  const validations = {
    owner: [{ type: "Required" }],
    type: [],
    provider: [],
    providerAccountId: [],
    refresh_token: [],
    access_token: [],
    expires_at: [],
    token_type: [],
    scope: [],
    id_token: [],
    session_state: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          owner,
          type,
          provider,
          providerAccountId,
          refresh_token,
          access_token,
          expires_at,
          token_type,
          scope,
          id_token,
          session_state,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Account.copyOf(accountRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner: value,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type: value,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Provider"
        isRequired={false}
        isReadOnly={false}
        value={provider}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider: value,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.provider ?? value;
          }
          if (errors.provider?.hasError) {
            runValidationTasks("provider", value);
          }
          setProvider(value);
        }}
        onBlur={() => runValidationTasks("provider", provider)}
        errorMessage={errors.provider?.errorMessage}
        hasError={errors.provider?.hasError}
        {...getOverrideProps(overrides, "provider")}
      ></TextField>
      <TextField
        label="Provider account id"
        isRequired={false}
        isReadOnly={false}
        value={providerAccountId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId: value,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.providerAccountId ?? value;
          }
          if (errors.providerAccountId?.hasError) {
            runValidationTasks("providerAccountId", value);
          }
          setProviderAccountId(value);
        }}
        onBlur={() =>
          runValidationTasks("providerAccountId", providerAccountId)
        }
        errorMessage={errors.providerAccountId?.errorMessage}
        hasError={errors.providerAccountId?.hasError}
        {...getOverrideProps(overrides, "providerAccountId")}
      ></TextField>
      <TextField
        label="Refresh token"
        isRequired={false}
        isReadOnly={false}
        value={refresh_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token: value,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.refresh_token ?? value;
          }
          if (errors.refresh_token?.hasError) {
            runValidationTasks("refresh_token", value);
          }
          setRefresh_token(value);
        }}
        onBlur={() => runValidationTasks("refresh_token", refresh_token)}
        errorMessage={errors.refresh_token?.errorMessage}
        hasError={errors.refresh_token?.hasError}
        {...getOverrideProps(overrides, "refresh_token")}
      ></TextField>
      <TextField
        label="Access token"
        isRequired={false}
        isReadOnly={false}
        value={access_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token: value,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.access_token ?? value;
          }
          if (errors.access_token?.hasError) {
            runValidationTasks("access_token", value);
          }
          setAccess_token(value);
        }}
        onBlur={() => runValidationTasks("access_token", access_token)}
        errorMessage={errors.access_token?.errorMessage}
        hasError={errors.access_token?.hasError}
        {...getOverrideProps(overrides, "access_token")}
      ></TextField>
      <TextField
        label="Expires at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={expires_at && convertToLocal(new Date(expires_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at: value,
              token_type,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.expires_at ?? value;
          }
          if (errors.expires_at?.hasError) {
            runValidationTasks("expires_at", value);
          }
          setExpires_at(value);
        }}
        onBlur={() => runValidationTasks("expires_at", expires_at)}
        errorMessage={errors.expires_at?.errorMessage}
        hasError={errors.expires_at?.hasError}
        {...getOverrideProps(overrides, "expires_at")}
      ></TextField>
      <TextField
        label="Token type"
        isRequired={false}
        isReadOnly={false}
        value={token_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type: value,
              scope,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.token_type ?? value;
          }
          if (errors.token_type?.hasError) {
            runValidationTasks("token_type", value);
          }
          setToken_type(value);
        }}
        onBlur={() => runValidationTasks("token_type", token_type)}
        errorMessage={errors.token_type?.errorMessage}
        hasError={errors.token_type?.hasError}
        {...getOverrideProps(overrides, "token_type")}
      ></TextField>
      <TextField
        label="Scope"
        isRequired={false}
        isReadOnly={false}
        value={scope}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope: value,
              id_token,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.scope ?? value;
          }
          if (errors.scope?.hasError) {
            runValidationTasks("scope", value);
          }
          setScope(value);
        }}
        onBlur={() => runValidationTasks("scope", scope)}
        errorMessage={errors.scope?.errorMessage}
        hasError={errors.scope?.hasError}
        {...getOverrideProps(overrides, "scope")}
      ></TextField>
      <TextField
        label="Id token"
        isRequired={false}
        isReadOnly={false}
        value={id_token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token: value,
              session_state,
            };
            const result = onChange(modelFields);
            value = result?.id_token ?? value;
          }
          if (errors.id_token?.hasError) {
            runValidationTasks("id_token", value);
          }
          setId_token(value);
        }}
        onBlur={() => runValidationTasks("id_token", id_token)}
        errorMessage={errors.id_token?.errorMessage}
        hasError={errors.id_token?.hasError}
        {...getOverrideProps(overrides, "id_token")}
      ></TextField>
      <TextField
        label="Session state"
        isRequired={false}
        isReadOnly={false}
        value={session_state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              type,
              provider,
              providerAccountId,
              refresh_token,
              access_token,
              expires_at,
              token_type,
              scope,
              id_token,
              session_state: value,
            };
            const result = onChange(modelFields);
            value = result?.session_state ?? value;
          }
          if (errors.session_state?.hasError) {
            runValidationTasks("session_state", value);
          }
          setSession_state(value);
        }}
        onBlur={() => runValidationTasks("session_state", session_state)}
        errorMessage={errors.session_state?.errorMessage}
        hasError={errors.session_state?.hasError}
        {...getOverrideProps(overrides, "session_state")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || accountModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || accountModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
