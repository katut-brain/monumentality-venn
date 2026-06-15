// 自動生成: モニュメンタリティ分析データ
const ELEMENTS = [
  {
    "id": "e1",
    "category": "生じ方",
    "label": "イベント（歴史）によるもの"
  },
  {
    "id": "e2",
    "category": "生じ方",
    "label": "人々の営みによるもの"
  },
  {
    "id": "e3",
    "category": "生じ方",
    "label": "時間経過によるもの"
  },
  {
    "id": "e4",
    "category": "何にモニュを感じるか",
    "label": "歴史的背景"
  },
  {
    "id": "e5",
    "category": "何にモニュを感じるか",
    "label": "人々の営み"
  },
  {
    "id": "e6",
    "category": "何にモニュを感じるか",
    "label": "古さ"
  },
  {
    "id": "e7",
    "category": "何にモニュを感じるか",
    "label": "大きさ"
  },
  {
    "id": "e8",
    "category": "何にモニュを感じるか",
    "label": "それ自体の性質"
  },
  {
    "id": "e9",
    "category": "象徴性",
    "label": "何かを象徴している"
  },
  {
    "id": "e10",
    "category": "記念性",
    "label": "何かを記念している"
  },
  {
    "id": "e11",
    "category": "記念性",
    "label": "記念する対象はない"
  },
  {
    "id": "e12",
    "category": "形態",
    "label": "壮大さを感じるような形態"
  },
  {
    "id": "e13",
    "category": "形態",
    "label": "何かを象徴している形態"
  },
  {
    "id": "e14",
    "category": "形態",
    "label": "特定の形はない"
  },
  {
    "id": "e15",
    "category": "空間性",
    "label": "空間性がある"
  },
  {
    "id": "e16",
    "category": "空間性",
    "label": "付随する空間性がない"
  },
  {
    "id": "e17",
    "category": "存在感",
    "label": "視覚的な存在感がある"
  },
  {
    "id": "e18",
    "category": "存在感",
    "label": "空間的な存在感がある"
  },
  {
    "id": "e19",
    "category": "存在感",
    "label": "存在感はない"
  },
  {
    "id": "e21",
    "category": "想起・忘却",
    "label": "忘却に耐えている（過去）"
  },
  {
    "id": "e22",
    "category": "想起・忘却",
    "label": "忘却に耐えそう（未来）"
  },
  {
    "id": "e23",
    "category": "先天的・後天的",
    "label": "先天的（出来事→対象→モニュ）"
  },
  {
    "id": "e24",
    "category": "先天的・後天的",
    "label": "後天的（対象→出来事→モニュ）"
  },
  {
    "id": "e25",
    "category": "先天的・後天的",
    "label": "その他"
  },
  {
    "id": "e26",
    "category": "記憶の類型",
    "label": "個人的記憶"
  },
  {
    "id": "e27",
    "category": "記憶の類型",
    "label": "集団的記憶"
  },
  {
    "id": "e28",
    "category": "記憶の類型",
    "label": "社会的記憶"
  },
  {
    "id": "e29",
    "category": "相対的・絶対的",
    "label": "相対的に秀でている"
  },
  {
    "id": "e30",
    "category": "相対的・絶対的",
    "label": "絶対的で普遍的（唯一無二）"
  }
];

const CASES = [
  {
    "name": "アクロポリス",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg/330px-Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg",
    "scores": {
      "e1": "yes",
      "e2": "yes",
      "e3": "yes",
      "e4": "yes",
      "e5": "yes",
      "e6": "yes",
      "e7": "maybe",
      "e8": "yes",
      "e11": "yes",
      "e12": "maybe_q",
      "e15": "yes",
      "e21": "yes",
      "e22": "yes",
      "e24": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "ピラミッド",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Great_Pyramid_Giza_%282%29.jpg/330px-Great_Pyramid_Giza_%282%29.jpg",
    "scores": {
      "e1": "yes",
      "e2": "yes",
      "e3": "yes",
      "e4": "yes",
      "e5": "yes",
      "e6": "yes",
      "e7": "yes",
      "e8": "maybe_q",
      "e9": "yes",
      "e10": "yes",
      "e12": "yes",
      "e21": "yes",
      "e22": "yes",
      "e23": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "エッフェル塔",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/330px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
    "scores": {
      "e1": "yes",
      "e4": "yes",
      "e5": "maybe_q",
      "e7": "maybe",
      "e9": "yes",
      "e10": "maybe_q",
      "e12": "yes",
      "e16": "yes_q",
      "e23": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "広島平和記念公園",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Hiroshima_Peace_Memorial_Museum_1.jpg/330px-Hiroshima_Peace_Memorial_Museum_1.jpg",
    "scores": {
      "e1": "maybe_q",
      "e2": "maybe_q",
      "e4": "yes",
      "e5": "yes",
      "e9": "maybe_q",
      "e10": "yes",
      "e14": "maybe_q",
      "e15": "yes",
      "e22": "yes_q",
      "e23": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "旧ユダヤ人収容所",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Auschwitz-birkenau-main_track.jpg/330px-Auschwitz-birkenau-main_track.jpg",
    "scores": {
      "e1": "yes",
      "e4": "yes",
      "e9": "yes",
      "e10": "yes",
      "e13": "yes",
      "e15": "yes_q",
      "e21": "yes",
      "e22": "yes",
      "e24": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "原爆ドーム",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Genbaku_Dome04-r.JPG/330px-Genbaku_Dome04-r.JPG",
    "scores": {
      "e1": "yes",
      "e4": "yes",
      "e9": "yes",
      "e10": "yes",
      "e13": "yes",
      "e16": "yes",
      "e21": "yes",
      "e22": "yes",
      "e24": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "奇跡の一本松",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Miracle_Pine_Tree.jpg/330px-Miracle_Pine_Tree.jpg",
    "scores": {
      "e1": "yes",
      "e4": "yes",
      "e9": "yes",
      "e10": "yes",
      "e13": "maybe_q",
      "e14": "maybe_q",
      "e15": "yes_q",
      "e21": "yes",
      "e22": "yes",
      "e24": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "式年遷宮",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%E5%BC%8F%E5%B9%B4%E9%81%B7%E5%AE%AE%E8%A8%98%E5%BF%B5%E7%A5%9E%E5%AE%AE%E7%BE%8E%E8%A1%93%E9%A4%A8.jpg/330px-%E5%BC%8F%E5%B9%B4%E9%81%B7%E5%AE%AE%E8%A8%98%E5%BF%B5%E7%A5%9E%E5%AE%AE%E7%BE%8E%E8%A1%93%E9%A4%A8.jpg",
    "scores": {
      "e2": "yes",
      "e3": "yes",
      "e4": "yes",
      "e5": "yes",
      "e6": "yes",
      "e11": "yes",
      "e14": "yes",
      "e16": "yes_q",
      "e21": "yes",
      "e22": "yes",
      "e25": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "紙の教会",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Paper_dome_night.jpg/330px-Paper_dome_night.jpg",
    "scores": {
      "e1": "maybe_q",
      "e2": "yes",
      "e5": "yes",
      "e8": "yes",
      "e9": "maybe",
      "e11": "yes",
      "e14": "yes",
      "e15": "yes",
      "e25": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "富士山",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mt.Fuji_from_Mierula.jpg/330px-Mt.Fuji_from_Mierula.jpg",
    "scores": {
      "e2": "maybe_q",
      "e3": "yes",
      "e5": "yes",
      "e6": "maybe_q",
      "e7": "yes",
      "e8": "maybe",
      "e11": "yes",
      "e12": "yes",
      "e15": "yes_q",
      "e21": "yes",
      "e22": "yes",
      "e25": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "無くなった飛翔",
    "img": "",
    "scores": {
      "e2": "yes",
      "e4": "maybe_q",
      "e5": "maybe_q",
      "e8": "maybe_q",
      "e9": "yes",
      "e10": "maybe_q",
      "e14": "yes",
      "e15": "yes",
      "e22": "yes",
      "e25": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "祭り",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gion_Matsuri_2017-5.jpg/330px-Gion_Matsuri_2017-5.jpg",
    "scores": {
      "e2": "yes",
      "e4": "maybe_q",
      "e5": "yes",
      "e6": "maybe_q",
      "e8": "yes",
      "e9": "maybe",
      "e11": "yes",
      "e14": "yes",
      "e15": "yes",
      "e21": "yes",
      "e22": "yes",
      "e25": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "大谷翔平",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dodgers_at_Nationals_%2853677192000%29_%28cropped2%29.jpg/330px-Dodgers_at_Nationals_%2853677192000%29_%28cropped2%29.jpg",
    "scores": {
      "e8": "yes",
      "e16": "yes",
      "e22": "yes",
      "e24": "yes",
      "e30": "yes"
    }
  },
  {
    "name": "ソーク生物学研究所",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Salk_Institute1.jpg/330px-Salk_Institute1.jpg",
    "scores": {
      "e8": "yes"
    }
  }
];
