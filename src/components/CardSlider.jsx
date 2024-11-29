import React from 'react';

const SlidingCard = () => {
  const cards = [
    {
      id: 1,
      recipientName: 'Dafa',
      message: 'Kamu itu seperti senja, indah tapi sulit ku gapai.',
      song: {
        name: 'Here With Me',
        artists: [{ name: 'd4vd' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b27364fa1bda999f4fbd2b7c4bb7' },
          ],
        },
      },
    },
    {
      id: 2,
      recipientName: 'Azmi',
      message: 'Aku belajar ikhlas dari kehilangan kamu.',
      song: {
        name: 'Falling In Love',
        artists: [{ name: 'Cigarettes After' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b273fd275af89cec73d6287f9cbf' },
          ],
        },
      },
    },
    {
      id: 3,
      recipientName: 'Sanjif',
      message: 'Sejak ada kamu, hujan nggak pernah terasa sendu lagi.',
      song: {
        name: 'Pluto Projector',
        artists: [{ name: 'Rex Orange County' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b273733e6d7818eef87d20df86b5' },
          ],
        },
      },
    },
    {
      id: 4,
      recipientName: 'Dava',
      message: 'Jangan deket cewek lain',
      song: {
        name: 'Kata Mereka Ini Berlebihan',
        artists: [{ name: 'Bernadya' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b2737d00871af1d2539ca4432e33' },
          ],
        },
      },
    },
    {
      id: 5,
      recipientName: 'Rizky',
      message: 'udah lupa ya?',
      song: {
        name: 'i love you',
        artists: [{ name: 'Billie Ellish' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce' },
          ],
        },
      },
    },
    {
      id: 6,
      recipientName: 'Adam',
      message: 'Aku nggak tahu apa arti cinta, sampai aku bertemu denganmu.',
      song: {
        name: 'I miss you, I’m sorry',
        artists: [{ name: 'Gracie Abrams' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b27355c38bc34d1fe852f2657c2e' },
          ],
        },
      },
    },
    {
      id: 7,
      recipientName: 'Reval',
      message: 'Jarak itu hanya angka. Hati kita selalu dekat.',
      song: {
        name: 'Cinta Terakhir',
        artists: [{ name: 'Ari Lasso' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/e850a6af940d44800207bd7cf5d2dbded6ca5c1e' },
          ],
        },
      },
    },
    {
      id: 8,
      recipientName: 'Junaedi',
      message: 'Aku adalah puzzle yang akhirnya lengkap dengan kehadiranmu.',
      song: {
        name: 'Pura Pura Lupa',
        artists: [{ name: 'Mahen' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b2737f00689501f07caf39a4136c' },
          ],
        },
      },
    },
    {
      id: 9,
      recipientName: 'Shafwan',
      message: 'Mimpi terindahku adalah masa depan di mana kamu tetap di sisiku.',
      song: {
        name: 'Please Please Please Let Me Get What I Want',
        artists: [{ name: '2005 Remaster' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b27358df6181041c38412db1b253' },
          ],
        },
      },
    },
    {
      id: 10,
      recipientName: 'Mulyono',
      message: 'Kamu adalah rumah, tempat aku merasa nyaman.',
      song: {
        name: 'terima kasih',
        artists: [{ name: 'Hal' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b2737c535da8b21c3a5c055b4202' },
          ],
        },
      },
    },
    {
      id: 11,
      recipientName: 'Fufufafa',
      message: 'Kalau kamu tanya aku kenapa mencintaimu, aku akan bilang, "Kenapa tidak?"',
      song: {
        name: 'Surat Cinta Untuk Starla',
        artists: [{ name: 'Virgoun' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b273cf6af54752ff67e6ce8f86a1' },
          ],
        },
      },
    },
    {
      id: 12,
      recipientName: 'Feri',
      message: 'Aku nggak tahu apa itu ketenangan sampai aku mendengar tawamu.',
      song: {
        name: 'Mr. Loverman',
        artists: [{ name: 'Ricky Montgomery' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0' },
          ],
        },
      },
    },
    {
      id: 13,
      recipientName: 'Dafa',
      message: 'gausa main roam ajg aneh bgt',
      song: {
        name: 'Fuck You',
        artists: [{ name: 'Lily Allen' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b2737124b6bf785117033d003590' },
          ],
        },
      },
    },
    {
      id: 14,
      recipientName: 'Rizky P',
      message: 'Cinta itu seperti ombak, dan aku hanyut di dalamnya denganmu.',
      song: {
        name: 'Always Remember Us This Way',
        artists: [{ name: 'lady Gaga' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2' },
          ],
        },
      },
    },
    {
      id: 15,
      recipientName: 'Vahri',
      message: 'Sigma Skibidi Mewinkk',
      song: {
        name: 'Hati-hati di Jalan',
        artists: [{ name: 'Tulus' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b273d34a0632f6861e8875d6899b' },
          ],
        },
      },
    },
    {
      id: 16,
      recipientName: 'Andrian',
      message: 'Kamu low profile bgt si orangnya? 08?',
      song: {
        name: 'Jatuh Suka',
        artists: [{ name: 'Tulus' }],
        album: {
          images: [
            null,
            null,
            { url: 'https://i.scdn.co/image/ab67616d0000b273d34a0632f6861e8875d6899b' },
          ],
        },
      },
    },
  ];
  
  return (
    <div className="w-full space-y-10 overflow-hidden relative">
      {/* Slider Atas */}
      <div className="card-wrapper">
        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="card cursor-default" // Ganti <a> dengan <div> dan tambahkan class cursor-default
          >
            <div className="card-content">
              <p className="text-sm font-medium text-gray-500">To: {card.recipientName}</p>
              <p className="mt-2 text-3xl text-gray-800" style={{ fontFamily: 'ReenieBeanie' }}>
                {card.message}
              </p>
              <div className="flex items-center p-1 pt-7 gap-2">
                <img
                  src={card.song.album.images[2]?.url || 'fallback-image-url'}
                  alt={`${card.song.name} album cover`}
                  className="flex-shrink-0 w-10 h-10"
                />
                <div className="flex flex-wrap gap-1 bg-slate-300/20 rounded-sm">
                  <p className="text-sm font-medium text-gray-800 truncate">{card.song.name} - </p>
                  <p className="text-gray-600 text-sm">{card.song.artists[0].name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Bawah */}
      <div className="card-wrapper-right">
        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="card cursor-default" // Sama seperti slider atas
          >
            <div className="card-content">
              <p className="text-sm font-medium text-gray-500">To: {card.recipientName}</p>
              <p className="mt-2 text-3xl text-gray-800" style={{ fontFamily: 'ReenieBeanie' }}>
                {card.message}
              </p>
              <div className="flex items-center p-1 pt-7 gap-2">
                <img
                  src={card.song.album.images[2]?.url || 'fallback-image-url'}
                  alt={`${card.song.name} album cover`}
                  className="flex-shrink-0 w-10 h-10"
                />
                <div className="flex flex-wrap gap-1 bg-slate-300/20 rounded-sm">
                  <p className="text-sm font-medium text-gray-800 truncate">{card.song.name} - </p>
                  <p className="text-gray-600 text-sm">{card.song.artists[0].name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingCard;