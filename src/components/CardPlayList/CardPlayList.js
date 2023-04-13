import { MyCard } from './CardPlayList.styled';

const CardPlayList = ({
  colorCard,
  text,
  hightPlayList,
  heightTbody,
  countRow,
}) => {
  return (
    <MyCard
      style={{
        backgroundColor: colorCard,
        height: `${(heightTbody / countRow) * hightPlayList - 8}px `,
      }}
    >
      {text}
    </MyCard>
  );
};

export default CardPlayList;
