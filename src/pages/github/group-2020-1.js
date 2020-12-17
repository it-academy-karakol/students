import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"

export const query = graphql`
  query UserQuery {
    github {
      viewer {
        user2: user(login: "Duishenbaev") {
            ...UserFragment
        }
        user3: user(login: "Bek-Kubanychbekov") {
            ...UserFragment
        }
        user4: user(login: "Azimrabaev") {
            ...UserFragment
        }
        user5: user(login: "Meerim022028") {
            ...UserFragment
        }
        user6: user(login: "Esenov-Kubanychbek") {
            ...UserFragment
        }
        user7: user(login: "AlinurAbdyiskakov") {
            ...UserFragment
        }
        user8: user(login: "AriyanaKaparbekova") {
            ...UserFragment
        }
        user9: user(login: "AmanKalkanbaev") {
            ...UserFragment
        }
        user10: user(login: "uwuMAKSON") {
            ...UserFragment
        }
        user11: user(login: "Begaiym14") {
            ...UserFragment
        }
        user12: user(login: "AyanaZhaparova") {
            ...UserFragment
        }
        user13: user(login: "IslambekZhakypbekov") {
            ...UserFragment
        }
        user14: user(login: "Aimarall") {
            ...UserFragment
        }         
      }
    }
  }
  
  fragment UserFragment on User {
    login,
    repositories(first: 100) {
      nodes {
        name
        main: ref(qualifiedName: "main") {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
        master: ref(qualifiedName: "master") {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  } 
`

const IndexPage = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            Test
        </Layout>
      );
}

export default IndexPage
