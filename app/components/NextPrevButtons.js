import styles from "./NextPrevButtons.module.css";

import iconBackButton from "../../public/assets/shared/icon-back-button.svg";
import iconNextButton from "../../public/assets/shared/icon-next-button.svg";
import Image from "next/image";
import Link from "next/link";

export default function NextPrevButtons({ slide }) {
  let nextSlide = slide + 1;
  let previousSlide = slide - 1;

  if (slide === 15) {
    nextSlide = 1;
  }
  if (slide === 1) {
    previousSlide = 15;
  }
  return (
    <div>
      <Link href={`/slide/${previousSlide}`}>
        <Image
          className={styles.backButton}
          src={iconBackButton}
          width={17.3}
          height={16}
          alt="back button icon"
        />
      </Link>

      <Link href={`/slide/${nextSlide}`}>
        <Image
          className={styles.nextButton}
          src={iconNextButton}
          width={17.3}
          height={16}
          alt="next button icon"
        />
      </Link>
    </div>
  );
}
