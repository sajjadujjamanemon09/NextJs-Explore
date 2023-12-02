import Image from "next/image";
import storeImage from '@/assets/undraw_Pic_profile_re_7g2h.png'

const AlbumPage = () => {
  return (
    <div>
      <Image
        src="https://i.ibb.co/GRQ82b7/germany-beat-argentina-u-17-wc.png"
        alt="logo"
        width={500}
        height={500}
      />
      <Image
        src={storeImage}
        alt="logo"
        width={500}
        height={500}
      />
    </div>
  );
};

export default AlbumPage;
