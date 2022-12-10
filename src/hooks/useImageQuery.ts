import { useStaticQuery, graphql } from 'gatsby';

export const useImageQuery = () => {
    const result = useStaticQuery(graphql`
        query ($picture: String) {
            imageone: file(relativePath: { eq: $picture }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 500
                        quality: 50
                    )
                }
            }
        }
    `);
}