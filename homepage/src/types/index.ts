/**
 * これは、アプリケーション全体で使用される型の定義を含むファイルです。
 */

/**
 * スキルの型定義
 */
export interface Skill {
  name: string;
  percentage: number;
}

/**
 * タイムラインイベントの型定義
 */
export interface TimelineEvent {
  year: string;
  title: string;
  description?: string;
}

/**
 * プロジェクトの型定義
 */
export interface Project {
  title: string;
  description: string;
  iconUrl: string;
}

/**
 * ソーシャルリンクの型定義
 */
export interface SocialLink {
  platform: string;
  url: string;
}