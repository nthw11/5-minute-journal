// src/components/MyForm/MyForm.tsx
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  VStack,
  Checkbox,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels
} from '@chakra-ui/react';

import { activeRoutine } from 'src/lib/userData';

// Yup validation schema
const validationSchema = Yup.object({
  hoursSlept: Yup.number().required('Hours slept is required').min(0, 'Must be a positive number'),
  attitude: Yup.number().required('Attitude is required').min(1, 'Must be 1 or greater'),
  gratitudePosts: Yup.string().required('Gratitude posts are required'),
  dailyIntentions: Yup.string().required('Daily intentions are required'),
  dreams: Yup.string().required('Dreams are required'),
  morningRoutine: Yup.array().of(Yup.string()).required('Morning routine is required'),
  tags: Yup.string(),
  notes: Yup.string(),
});


export const DailyMorningPostEntryForm = () => {

  return (
    <VStack spacing={4} width={'100%'}>
      <Formik
        initialValues={{
          hoursSlept: 0,
          attitude: 1,
          gratitudePosts: '',
          dailyIntentions: '',
          dreams: '',
          morningRoutine: [],
          tags: '',
          notes: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          // Handle form submission here (e.g., send to an API)
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            {/* Form Fields */}
            <Field name="hoursSlept">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.hoursSlept && form.touched.hoursSlept}>
                  <FormLabel htmlFor="hoursSlept">Hours Slept</FormLabel>
                  <Input {...field} id="hoursSlept" type="number" />
                  <FormErrorMessage>{form.errors.hoursSlept}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="attitude">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.attitude && form.touched.attitude}>
                  <FormLabel htmlFor="attitude">Attitude</FormLabel>
                  <Input {...field} id="attitude" type="number" />
                  <FormErrorMessage>{form.errors.attitude}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="gratitudePosts">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.gratitudePosts && form.touched.gratitudePosts}>
                  <FormLabel htmlFor="gratitudePosts">Gratitude Posts</FormLabel>
                  <Textarea {...field} id="gratitudePosts" />
                  <FormErrorMessage>{form.errors.gratitudePosts}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="dailyIntentions">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.dailyIntentions && form.touched.dailyIntentions}>
                  <FormLabel htmlFor="dailyIntentions">Daily Intentions</FormLabel>
                  <Textarea {...field} id="dailyIntentions" />
                  <FormErrorMessage>{form.errors.dailyIntentions}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="dreams">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.dreams && form.touched.dreams}>
                  <FormLabel htmlFor="dreams">Dreams</FormLabel>
                  <Textarea {...field} id="dreams" />
                  <FormErrorMessage>{form.errors.dreams}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="morningRoutine">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel>Morning Routine</FormLabel>
                  {activeRoutine.map((item) => (
                    <Checkbox
                      key={item}
                      name="morningRoutine"
                      value={item}
                      isChecked={values.morningRoutine.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFieldValue('morningRoutine', [...values.morningRoutine, item]);
                        } else {
                          setFieldValue('morningRoutine', values.morningRoutine.filter(i => i !== item));
                        }
                      }}
                    >
                      {item}
                    </Checkbox>
                  ))}
                </FormControl>
              )}
            </Field>
            <Field name="tags">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.tags && form.touched.tags}>
                  <FormLabel htmlFor="tags">Tags</FormLabel>
                  <Input {...field} id="tags" />
                  <FormErrorMessage>{form.errors.tags}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="notes">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.notes && form.touched.notes}>
                  <FormLabel htmlFor="notes">Notes</FormLabel>
                  <Textarea {...field} id="notes" />
                  <FormErrorMessage>{form.errors.notes}</FormErrorMessage>
                </FormControl>
              )}
            </Field>


            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export const DailyEveningPostEntryForm = () => {
  const [eveningPost, setEveningPost] = useState({});

  return (
    <VStack spacing={4} width={'100%'}>
      <Formik
        initialValues={eveningPost}
        onSubmit={(values) => {
          setEveningPost(values);
          // submit values
        }}
      >
        {({ isSubmitting }) => (
          <Form>

            <Field name="time">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Time</FormLabel>
                  <Input {...field} type="text" />
                </FormControl>
              )}
            </Field>

            <Field name="productivity">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Productivity</FormLabel>
                  <Input {...field} type="number" />
                </FormControl>
              )}
            </Field>

            <Field name="lessonsLearned">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Lessons Learned</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>

            <Field name="mistakesMade">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Mistakes Made</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="attitude">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Attitude</FormLabel>
                  <Input {...field} type="number" />
                </FormControl>
              )}
            </Field>
            <Field name="positiveEvents">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Positive Events</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="peopleMet">
              {({ field }) => (
                <FormControl>
                  <FormLabel>People Met</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="goals">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Goals</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="events">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Events</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="notes">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Notes</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>

            <Field name="tags">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Tags</FormLabel>
                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};
