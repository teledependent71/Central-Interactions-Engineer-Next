import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Central Interactions Engineer</title>
          <meta
            property="og:title"
            content="test-page - Central Interactions Engineer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_82hx8v) => (
            <>
              <h1>{context_82hx8v?.Name}</h1>
            </>
          )}
          initialData={props.context82hx8vProp}
          persistDataDuringLoading={true}
          key={props?.context82hx8vProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context82hx8vProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context82hx8vProp: context82hx8vProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
