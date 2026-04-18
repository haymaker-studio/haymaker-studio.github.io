#!/usr/bin/env python3
"""
Downloads thumbnails for all Haymaker videos using yt-dlp.

First run:
  pip3 install yt-dlp
Then:
  cd images && python3 download_thumbs.py
"""
import subprocess, os, glob, sys, shutil

VIDEOS = [
    ('DIwxvo2zTX8',          'instagram'),
    ('DRp19PRgZGX',          'instagram'),
    ('DRxIOkYidrY',          'instagram'),
    ('DSWLgqDiTOs',          'instagram'),
    ('DSG0pEYEo6R',          'instagram'),
    ('DW_wXM3hKBH',          'instagram'),
    ('DViQmOlj963',          'instagram'),
    ('DSEDAEZgaqH',          'instagram'),
    ('DRyKFZhCpKk',          'instagram'),
    ('DSJzUTliqx6',          'instagram'),
    ('DRydCKUDgDk',          'instagram'),
    ('DSB2gGdkQcz',          'instagram'),
    ('CwqiZNgy4jy',          'instagram'),
    ('DJ2psBsyTbc',          'instagram'),
    ('DJPlHQgTIur',          'instagram'),
    ('DI19D4kT-wG',          'instagram'),
    ('DJVRL-uy_Oz',          'instagram'),
    ('DNtl_uWZBG3',          'instagram'),
    ('DLIb3_SvYCT',          'instagram'),
    ('DW65JBoJn95',          'instagram'),
    ('DRyVooDEVgk',          'instagram'),
    ('DQWnUgMEdDZ',          'instagram'),
    ('DTn6BVgkmch',          'instagram'),
    ('DWNYMPXjOMh',          'instagram'),
    ('ZTk5XN4nY',            'tiktok'),
    ('7628817224047922445',   'tiktok'),
]

def video_url(shortcode, platform):
    if platform == 'instagram':
        return f'https://www.instagram.com/reel/{shortcode}/'
    return f'https://www.tiktok.com/video/{shortcode}'

YTDLP = [sys.executable, '-m', 'yt_dlp']

def download(shortcode, platform):
    dest = f'vid-{shortcode}.jpg'
    if os.path.exists(dest):
        return 'skip'

    url = video_url(shortcode, platform)

    # Try browsers in order (uses your existing login session)
    browsers = ['safari', 'chrome', 'firefox', 'chromium']
    for browser in browsers:
        try:
            result = subprocess.run(
                YTDLP + [
                '--write-thumbnail',
                '--skip-download',
                '--convert-thumbnails', 'jpg',
                '--cookies-from-browser', browser,
                '-o', f'tmp-{shortcode}.%(ext)s',
                '--quiet',
                url
            ], capture_output=True, text=True, timeout=30)


            # yt-dlp may save as .jpg or .webp then convert
            for ext in ['jpg', 'jpeg', 'webp', 'png']:
                candidate = f'tmp-{shortcode}.{ext}'
                if os.path.exists(candidate):
                    os.rename(candidate, dest)
                    return f'ok ({browser})'

            # Also check if it saved with a different id
            matches = glob.glob(f'tmp-{shortcode}*')
            if matches:
                os.rename(matches[0], dest)
                return f'ok ({browser})'

        except FileNotFoundError:
            print('\n  yt-dlp not found. Install it: pip3 install yt-dlp')
            sys.exit(1)
        except subprocess.TimeoutExpired:
            continue

    return 'failed'

# Check yt-dlp is importable
try:
    subprocess.run([sys.executable, '-m', 'yt_dlp', '--version'],
                   capture_output=True, check=True)
except subprocess.CalledProcessError:
    print('yt-dlp not found. Install it first:\n  pip3 install yt-dlp\n')
    sys.exit(1)

saved, skipped, failed = 0, 0, 0
failed_list = []

for shortcode, platform in VIDEOS:
    print(f'  {shortcode[:16]:<16} ... ', end='', flush=True)
    status = download(shortcode, platform)
    print(status)
    if status == 'skip':
        skipped += 1
    elif status.startswith('ok'):
        saved += 1
    else:
        failed += 1
        failed_list.append(shortcode)

print(f'\nDone: {saved} saved, {skipped} skipped, {failed} failed')
if failed_list:
    print('Failed:', ', '.join(failed_list))
    print('For these, open the reel on Instagram → right-click video → save screenshot → rename to vid-SHORTCODE.jpg')
