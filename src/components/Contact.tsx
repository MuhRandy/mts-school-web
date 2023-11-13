import {
  IconAddressBook,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBuildingCommunity,
  IconMail,
} from "@tabler/icons-react";
import AsideContent from "./AsideContent";

function Contact() {
  return (
    <AsideContent>
      <AsideContent.T1 title="Kontak" />
      <div className="flex flex-col gap-2 mt-2">
        <article>
          <AsideContent.T2 className={"flex items-center"}>
            <IconBuildingCommunity />
            Alamat :
          </AsideContent.T2>
          <AsideContent.P>Jalan Keramat RT. 04 Desa Lok Buntar</AsideContent.P>
        </article>
        <article>
          <AsideContent.T2 className={"flex items-center"}>
            <IconAddressBook />
            Telepon :
          </AsideContent.T2>
          <AsideContent.P>+6285393294571</AsideContent.P>
        </article>
        <article>
          <AsideContent.T2 className={"flex items-center"}>
            <IconMail />
            Email :
          </AsideContent.T2>
          <AsideContent.P>mmiftahululum21@gmail.com</AsideContent.P>
        </article>
        <article>
          <AsideContent.T2 title={"Media Sosial"} className="text-center" />
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            <div className="flex flex-col items-center">
              <div>
                <IconBrandInstagram />
              </div>
              <div>@mift.ulum</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <IconBrandFacebook />
              </div>
              <div>@mift.ulum</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <IconBrandWhatsapp />
              </div>
              <div>+628xxxxxxxxx</div>
            </div>
          </div>
        </article>
      </div>
    </AsideContent>
  );
}

export default Contact;
