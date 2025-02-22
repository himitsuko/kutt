import React, { FC, useEffect } from "react";
import getConfig from "next/config";

import showRecaptcha from "../helpers/recaptcha";
import { useStoreState } from "../store";
import { ColCenter } from "./Layout";
import ReCaptcha from "./ReCaptcha";
import ALink from "./ALink";
import Text from "./Text";

const { publicRuntimeConfig } = getConfig();

const Footer: FC = () => {
  const { isAuthenticated } = useStoreState((s) => s.auth);

  useEffect(() => {
    showRecaptcha();
  }, []);

  return (
    <ColCenter
      as="footer"
      width={1}
      backgroundColor="white"
      p={isAuthenticated ? 2 : 24}
    >
      {!isAuthenticated && <ReCaptcha />}
      <Text fontSize={[12, 13]} py={2}>
        Made with love by{" "}
        <ALink href="//depocket.com/" title="The Devs" target="_blank">
          DePocket
        </ALink>
        {" | "}
        <ALink
          href="https://app.depocket.com"
          title="DePocket Dashboard"
          target="_blank"
        >
          DePocket Dashboard
        </ALink>
        {" | "}
        <ALink
          href="https://github.com/depocket"
          title="GitHub"
          target="_blank"
        >
          GitHub
        </ALink>
        {" | "}
        <ALink href="/terms" title="Terms of Service" isNextLink>
          Terms of Service
        </ALink>
        {" | "}
        <ALink href="/report" title="Report abuse" isNextLink>
          Report Abuse
        </ALink>
        {publicRuntimeConfig.CONTACT_EMAIL && (
          <>
            {" | "}
            <ALink
              href={`mailto:${publicRuntimeConfig.CONTACT_EMAIL}`}
              title="Contact us"
            >
              Contact us
            </ALink>
          </>
        )}
        .
      </Text>
    </ColCenter>
  );
};

export default Footer;
