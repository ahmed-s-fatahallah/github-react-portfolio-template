import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: var(--primary);

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }

  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <ul>
        <li>
          <a href="mailto:ahmed.s.fatahallah@gmail.com">
            ahmed.s.fatahallah@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+201098500188">+20 109 850 0188</a>
        </li>
      </ul>

      <SocialLinks />
    </StyledFooter>
  );
}
