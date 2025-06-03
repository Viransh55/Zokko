export interface Song {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  coverUrl: string;
  language: 'hindi' | 'english';
  mood?: string[];
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941663/04._Arijit_Singh_Mithoon_-_Tum_Hi_Ho_From__Aashiqui_2__cyfvxj.mp3',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0F1I0Pa5_pRxsmUIVoaork_4TBj1fP9I_Q&s',
    language: 'hindi',
    mood: ['romantic', 'emotional', 'sad']
  },
  {
    id: '2',
    title: 'Channa Mereya',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941655/01_-_Pritam_-_Channa_Mereya_From_Ae_Dil_Hai_Mushkil_cb6otf.mp3',
    coverUrl: 'https://images.pexels.com/photos/4338020/pexels-photo-4338020.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['sad', 'emotional']
  },
  {
    id: '3',
    title: 'Kal Ho Na Ho',
    artist: 'Sonu Nigam',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941663/01_-_Sonu_Nigam_-_Kal_Ho_Naa_Ho_nm26by.mp3',
    coverUrl: 'https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['inspirational', 'emotional', 'sad']
  },
  {
    id: '4',
    title: 'Teri Galliyan',
    artist: 'Ankit Tiwari',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941676/05._Ankit_Tiwari_-_Galliyan_msrzyd.mp3',
    coverUrl: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'emotional']
  },
  {
    id: '5',
    title: 'Ae Dil Hai Mushkil',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941651/01_Pritam_Ae_Dil_Hai_Mushkil_Title_Track_From_Ae_Dil_Hai_Mushkil_jom81t.mp3',
    coverUrl: 'https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['sad', 'emotional']
  },
  {
    id: '6',
    title: 'Bekhayali',
    artist: 'Sachet Tandon',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941649/01_Sachet_Tandon__Sachet_Parampara_Bekhayali_From_Kabir_Singh__hsjgd3.mp3',
    coverUrl: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['sad', 'breakup']
  },
  {
    id: '7',
    title: 'Kesariya',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941660/01_-_Pritam_-_Kesariya_From_Brahmastra_bjywv0.mp3',
    coverUrl: 'https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'happy']
  },
  {
    id: '8',
    title: 'Jab Tak',
    artist: 'Armaan Malik',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941674/06_Armaan_Malik_Jab_Tak_From_M_S_Dhoni_The_Untold_Story__gemwlt.mp3',
    coverUrl: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'energetic']
  },
  {
    id: '9',
    title: 'Dil Diyan Gallan',
    artist: 'Atif Aslam',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941651/02_-_Atif_Aslam_-_Dil_Diyan_Gallan_wwn8j0.mp3',
    coverUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'happy']
  },
  {
    id: '10',
    title: 'Mann Bharrya',
    artist: 'B Praak',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941652/01_-_B_Praak_-_Mann_Bharrya_iczho0.mp3',
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['sad', 'emotional']
  },
  {
    id: '11',
    title: 'Humdard',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941671/06._Arijit_Singh_Mithoon_-_Humdard_From__Ek_Villain__grf6c4.mp3',
    coverUrl: 'https://images.pexels.com/photos/6374954/pexels-photo-6374954.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['emotional', 'sad']
  },
  {
    id: '12',
    title: 'Kaun Tujhe',
    artist: 'Palak Muchhal',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941660/02._Palak_Muchhal_Amaal_Mallik_-_Kaun_Tujhe_bniycm.mp3',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'emotional']
  },
  {
    id: '13',
    title: 'Tujhe Kitna Chahne Lage',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941666/04_Arijit_Singh__Mithoon_Tujhe_Kitna_Chahne_Lage_From_Kabir_Singh_al8gas.mp3',
    coverUrl: 'https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'emotional']
  },
  {
    id: '14',
    title: 'Raataan Lambiyan',
    artist: 'Tanishk Bagchi',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941659/01_-_Tanishk_Bagchi_-_Raataan_Lambiyan_From_Shershaah_a8joov.mp3',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'happy']
  },
  {
    id: '15',
    title: 'Pachtaoge',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941674/07._Arijit_Singh_-_Pachtaoge_From__Jaani_Ve__ctechz.mp3',
    coverUrl: 'https://images.pexels.com/photos/1010518/pexels-photo-1010518.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['sad', 'breakup']
  },
  {
    id: '16',
    title: 'Laal Ishq',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941669/06_-_Arijit_Singh_-_Laal_Ishq_gx1864.mp3',
    coverUrl: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'emotional']
  },
  {
    id: '17',
    title: 'O Saathi',
    artist: 'Atif Aslam',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941647/01_-_Arijit_Singh_-_O_Saathi_vyggyk.mp3',
    coverUrl: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'happy']
  },
  {
    id: '18',
    title: 'Nadaan Parinde',
    artist: 'A.R. Rahman',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941679/11._A.R._Rahman_Mohit_Chauhan_-_Nadaan_Parinde_tsttet.mp3',
    coverUrl: 'https://images.pexels.com/photos/3353399/pexels-photo-3353399.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['emotional', 'inspirational']
  },
  {
    id: '19',
    title: 'Chhod Diya',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941669/05_-_Arijit_Singh_-_Chhod_Diya_tqncss.mp3',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['sad', 'breakup']
  },
  {
    id: '20',
    title: 'Soch Na Sake',
    artist: 'Arijit Singh',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941678/23._Arijit_Singh_-_Soch_Na_Sake_dwksrr.mp4',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'hindi',
    mood: ['romantic', 'emotional']
  },
  {
    id: '31',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941670/05_-_Ed_Sheeran_-_Perfect_sbnya3.mp3',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['romantic', 'happy']
  },
  {
    id: '32',
    title: 'Someone Like You',
    artist: 'Adele',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941680/11_-_Adele_-_Someone_Like_You_timc0z.mp3',
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['sad', 'emotional']
  },
  {
    id: '33',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941656/01_-_Ed_Sheeran_-_Shape_of_You_aa6cnd.mp3',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['happy', 'energetic']
  },
  {
    id: '34',
    title: 'Stay With Me',
    artist: 'Sam Smith',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941659/03._Sam_Smith_-_Stay_With_Me_lj3cct.mp3',
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['sad', 'emotional']
  },
  {
    id: '35',
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941663/04._Mark_Ronson_Bruno_Mars_-_Uptown_Funk_feat._Bruno_Mars_jtydfd.mp3',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['happy', 'energetic', 'party']
  },
  {
    id: '36',
    title: 'All of Me',
    artist: 'John Legend',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941672/06._John_Legend_-_All_of_Me_kd6196.mp3',
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['romantic', 'emotional']
  },
  {
    id: '37',
    title: 'Rolling in the Deep',
    artist: 'Adele',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941652/01_-_Adele_-_Rolling_in_the_Deep_tevd4k.mp3',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['breakup', 'energetic']
  },
  {
    id: '38',
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941678/11._Ed_Sheeran_-_Thinking_out_Loud_a2z7l9.mp3',
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['romantic', 'happy']
  },
  {
    id: '39',
    title: 'Hello',
    artist: 'Adele',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941649/01_-_Adele_-_Hello_aivnva.mp3',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['sad', 'emotional']
  },
  {
    id: '40',
    title: 'Just the Way You Are',
    artist: 'Bruno Mars',
    audioUrl: 'https://res.cloudinary.com/dsm0uxb7a/video/upload/v1748941654/02_-_Bruno_Mars_-_Just_the_Way_You_Are_lh6wew.mp3',
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=300',
    language: 'english',
    mood: ['romantic', 'happy']
  }
];