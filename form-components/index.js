import { Button, Text, View } from "react-native";
import { Field, Form, Formik } from "formik";

import React from "react";

export function getInitialValues(fields, initialValues) {
    console.log("in", initialValues);
    let values = {};
    if (initialValues && !Object.keys(initialValues).length && fields) {
        for (const field of fields) {
            values[field.name] = "";
        }
        return values;
    }
    return initialValues;
}

const FormContainer = ({
  
    fields,
    initialValues,
    onSubmit,
   
}) => {
   

    const renderField = (props, index) => (
        <Field key={props.name || index} {...props} />
    );
    return (
        <Formik
            initialValues={initialValues }
            onSubmit={onSubmit}
            enableReinitialize
          
        >
            {({ handleSubmit}) => (
                <View>
                  
                        <View style={{ marginVertical: 40 }}>
                            <Button
                                onPress={handleSubmit}
                                title="submit"
                            />
                        </View>
                    
                </View>
            )}
        </Formik>
    );
};

export default FormContainer;