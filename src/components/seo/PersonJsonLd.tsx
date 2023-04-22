import React from "react";
import type { Person, WithContext } from "schema-dts";
import { JsonLd } from "react-schemaorg";
import { person, socials } from '../../config';

export const PersonJsonLd: React.FC = () => {
    const personData: WithContext<Person> = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": `${person.firstName} ${person.secondName}`,
        "url": "https://michaldziuba.dev",
        "email": person.email,
        "jobTitle": "Node.js Developer",
        "knowsAbout": ["TypeScript", "Node.js", "Nest.js", "JavaScript", "React"],
        "sameAs": socials.map(social => social.url),
    }

    return <JsonLd item={personData} />
}
